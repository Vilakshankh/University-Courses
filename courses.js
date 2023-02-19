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
      let name = null;
      let lines = data.split('\n');

      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        let parts = line.split('');
  

        if (!line) {
          continue;
        } 

        if (line.startsWith('Subject:')) 
        {
          subject = line.split(':')[1].trim();
        }
        else if (parts[0] == '0') 
        {
          let name = 'Laboratory';
          let section = parts.slice(0,3).join("");
          let crn = parts.slice(4,9).join("");
          let room = parts.slice(39,46).join("");
          let type = parts.slice(48,51).join("");
          let course = new Course(subject, null, name, section, crn, room, type);
          courses.push(course);
        }
        else
        {
          let number = parts.slice(5,9).join("");
          let name = parts.slice (10,37).join("").trim();
          let section = parts.slice(38,41).join("");
          let crn = parts.slice(42,47).join("");
          let room = parts.slice(77,84).join("");
          let type = parts.slice(86,89).join("");
          let course = new Course(subject, number, name, section, crn, room, type);
          courses.push(course);

        }
      }

      console.log(courses);
    });
  }
} 


Course.load("muncourses.txt");
