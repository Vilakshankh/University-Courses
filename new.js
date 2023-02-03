class Course
{
    constructor(subject, number, name, section, crn, room, type)
    {
        this.subject = subject;
        this.number = number;
        this.name = name;
        this.section = section;
        this.crn = crn;
        this.room = room;
        this.type = type;
    }


    catagorize (lines)
    {
        //let noQuotes = this.subject.replace(/['"]/g, '');
        //console.log(this.subject);

        let regSubject = new RegExp(this.subject, 'g');


        for (var i = 0; i < lines.length; i++)
        {
            //console.log(lines[i]);
            let noQuotes = lines[i].replace(/['"]/g, '');
            let resultSubject = noQuotes.match(regSubject);
          
            if (resultSubject != null)
            {//second check in place to make sure there arent any invalid entries
                    console.log(lines[i]);       
            }

        }
    }
    
    //for each line 
    load (datafile, callback)
    {
        const fs = require('fs');
        const lines = [];
        fs.readFile('muncourses.txt', 'utf8', (err, data) => 
            {
                if (err) throw err;
                const lines = data.split('\n');
                this.catagorize(lines);
            }
        );
    }
}


//const line = Course.load("muncourses.txt");

const course = new Course("Introduction to Anthropolog", 001, "", "", "", "", "");

course.load("muncourses.txt");
