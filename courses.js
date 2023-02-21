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
  
  static load(filename, callback) {

    const fs = require('fs');
    const data = fs.readFileSync(filename, 'utf-8');

      
    const courses = [];
    let subject = null;
    //let name = null;
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

    
    return courses;
    
  }

  static find(name, number)
  {
    
    let courses = Course.load("muncourses.txt");
    let result = [];

    for (let i = 0; i < courses.length; i++) {
      let course = courses[i];

      if (course.name != name && course.number != number) {
        continue;
      }
      result.push(course);
    }
    return result;
  }


} 


class student 
{
  schedule = [];
  constructor (name, id)
  {
    this. name = name;
    this. id = id;
  }
  

  static add (course)
  {

    schedule.push(course);
    return schedule;
    
  }

  // static remove (course)
  // {
  //   for (let i = 0; i < schedule.length; i++) {
  //     let listing = schedule[i];

  //     if (listing.name != course.name && listing.number != course.number) {
  //       continue;
  //     }
  //     schedule.pop()[i];
  //   }
  // }

}



let newCourse = new Course(null, "00000", "hello");
let addCourseStudent = student.add(newCourse);


console.log(addCourseStudent);
