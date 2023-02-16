class Course 
{
  constructor(subject, number, name, section, crn, room, type) {
    this.subject = subject;
    this.number = number;
    this.name = name;
    this.section = section;
    this.crn = crn;
    this.room = room;
    this.type = type;
    this.days = null;
    this.startTime = null;
    this.endTime = null;
  }
  
  static load(filename) {
    const fs = require('fs');
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
          console.error(err);
          return;
      }
      const courses = [];
      let subject = null;
      let lines = data.split('\n');

      for (let i = 0; i < 50; i++) {
        let line = lines[i].trim();
        if (!line) {
          continue;
        }
        
        let listOfSubjects = [];
        if (line.startsWith('Subject:')) {
          subject = line.split(':')[1].trim();
          
          //courses.push(subject);
          for(let i = 0; i<subject.length; i++)
          {
            //console.log(subject);
            let firstFourChars = subject.slice(0, 4).toUpperCase();
            listOfSubjects.push(firstFourChars);
            
          }
          
          //console.log(listOfSubjects); 
        }
        else{
          let parts = line.split(' ');
          let number = parts[1];
          let name = parts.slice(2, parts.indexOf(parts.find(word => /^\d{3}$/.test(word)))).join(' ');
          let section = parts.find(word => /^\d{3}$/.test(word));
          let crn = parts[parts.indexOf(section) + 1];
          let room = parts.find(word => /^[A-Za-z]{1,2}\d{4}$/.test(word));

          let course = new Course(subject, number, name, section, crn, room);
          
          courses.push(course);
        }
        
      }

        console.log(courses);
    });
  }
      
  

} 


Course.load("muncourses.txt");
/* 
class Course {
    constructor(subject, number, name, section, crn, room, type) {
      this.subject = subject;
      this.number = number;
      this.name = name;
      this.section = section;
      this.crn = crn;
      this.room = room;
      this.type = type;
      this.days = null;
      this.startTime = null;
      this.endTime = null;
    }
  
    static load(datafile) {
      const courses = [];
      let subject = null;
      let lines = datafile.split('\n');
  
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (!line) {
          continue;
        }
        if (line.startsWith('Subject:')) {
          subject = line.split(':')[1].trim();
          
        } else if (line.startsWith('ANTH')) {
          let parts = line.split(' ');
          let number = parts[1];
          let name = parts.slice(2, parts.indexOf('0', 2)).join(' ');
          let section = parts[parts.indexOf('0', 2)];
          let crn = parts[parts.indexOf('0', 2) + 1];
          let room = parts[parts.indexOf(' ', parts.indexOf('0', 2) + 1) + 1];
          let type = parts[parts.indexOf(' ', parts.indexOf('0', 2) + 1) + 2];
          let course = new Course(subject, number, name, section, crn, room, type);
  
          let dayLine = lines[++i];
          let days = dayLine.substring(19, 26).trim();
          course.days = days.split('');
          let times = dayLine.substring(27, 35).trim();
          course.startTime = times.substring(0, 4);
          course.endTime = times.substring(5, 9);
  
          courses.push(course);
        }
      }
      return courses;
    }
  
    static find(name, number, section) {
      return courses.filter(function(course) {
        return course.name === name && course.number === number && (!section || course.section === section);
      });
    }
  
    conflictsWith(other) {
        if (!this.days || !other.days) {
        return false;
        }

        for (let i = 0; i < this.days.length; i++) {
            let day = this.days[i];
            if (other.days.includes(day)) 
            {
                let start1 = parseInt(this.startTime.substring(0, 2) + this.startTime.substring(2, 4));
                let end1 = parseInt(this.endTime.substring(0, 2) + this.endTime.substring(2, 4));
                let start2 = parseInt(other.startTime.substring(0, 2) + other.startTime.substring(2, 4));
                

                if (day1 == day2) {
                    if (start1 == start2) 
                    {
                    return true;
                    } else if (start1 < start2 && start2 < end1) {
                    return true;
                    } else if (start2 < start1 && start1 < end2) {
                    return true;
                    }
                } return false;
            }
        }
    }
} 
*/