import { Meteor } from 'meteor/meteor';
import { Rosters } from '../imports/api/rosters.js';
import { Timeslots } from '../imports/api/timeslots.js';
import { Shifts } from '../imports/api/shifts.js';
import { Companies} from '../imports/api/companies.js';
import childProcess from 'child_process';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'testAllocator': function(){
    console.log("Testing Allocator...");

    //get output from child_process
    var output;
    var res = Async.runSync(function(done) {
      childProcess.exec('../allocator/testinput 2 1', function(err, stdout, sterr) {
        done(err, stdout);
      });
    });

    const c = "revue";

    //inserts test roster
    var r = Rosters.insert({
      name : 'week1',
      company : c
    });

    //splits output into array of strings
    var arr = res.result.split(/[\t\n]+/);
    while(arr.length !== 0) {
      //while not at end
      var shift = arr.shift();
      if (shift === "fin") {
        break;
      }

      //insert timeslot
      var day = shift.substr(0, 3);
      var timeslot = shift.substr(3);

      var ts = Timeslots.findOne({ name: timeslot });

      var t;
      if(ts === undefined) {
        t = Timeslots.insert({
          name : timeslot,
          company : c
        });
      } else {
        t = ts._id;
      }

      //insert timeslot into roster
      Rosters.update({ _id: r }, {
        $addToSet: { timeslots: t }
      });

      //add employees in shift to people
      var people = [];
      var next = arr.shift();
      while (next !== "done") {
        people.push(next);
        next = arr.shift();
      }

      //insert shifts
      console.log(`${shift}: ${people.toString()}`)
      var s = Shifts.insert({
        name: day,
        allocated : people
      });

      //insert shifts into day
      Timeslots.update({ _id: t }, {
        $addToSet: { shifts: s }
      });
    }

    //update roster status
    Rosters.update({ _id: r }, {
      $set: {
        isGenerated : true,
        generatedAt: new Date()
      }
    });
  },

  'testGetRoster': function(){
    console.log("Testing Get Roster...");

    var timeslots = Rosters.findOne({ name: "week1" }).timeslots;

    var roster = [];

    var i, j;
    //for each time slot
    for (i = 0; i < timeslots.length; ++i) {
      var t = Timeslots.findOne({ _id: timeslots[i] });
      var timeslot = t.name;
      var shifts = t.shifts;
      //for each shift
      var days = {};
      for (j = 0; j < shifts.length; ++j) {
        var shift = Shifts.findOne({ _id: shifts[j] });
        days[shift.name] = shift.allocated.toString();
      }
      roster.push({ time: timeslot, days: days });
    }
    console.log(roster);
    return roster;
  }
});