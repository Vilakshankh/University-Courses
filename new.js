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
        //let subject = new RegExp("[a-z](\w+)", 'g') 
        let subjectCheck = /[sS]ubject: [A-Z][a-z]\w+/;
        let exp = /Subject:\s+(.*)/i;
        for (let i = 0; i < lines.length; i++)
        {
            if(lines[i].match(exp)[0])
            {
                console.log(lines[i].match(exp)[1]);
            }
            //console.log(lines[i].match(exp)[1]);
            
            
            
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

const course = new Course();

course.load("muncourses.txt");
