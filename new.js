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


    static catagorize (lines)
    {
        //let noQuotes = name.replace(/['"]/g, '');


        //need to fix regexpression catchers for each variable
        let regSubject = new RegExp(this.subject, 'g');
        let regNum = new RegExp(this.number, 'g');
        let regName = new RegExp(this.name, 'g');
        let regSection = new RegExp(this.section, 'g');
        let regCrn = new RegExp(this.crn, 'g');
        let regRoom = new RegExp(this.room, 'g');
        let regType = new RegExp(this.type, 'g');
       



        for (var i = 0; i < lines.length; i++)
        {
            //console.log(lines[i]);
            let resultSubject = lines[i].match(regSubject);
            let resultNum = lines[i].match(regNum);
            let resultName = lines[i].match(regName);
            let resultSection = lines[i].match(regSection);
            let resultCrn = lines[i].match(regCrn);
            let resultRoom = lines[i].match(regRoom);
            let resultType = lines[i].match(regType);
            

            if (resultSubject != null)
            {//second check in place to make sure there arent any invalid entries
                if (resultNum != null && resultName != null && resultSection != null
                    &&  resultCrn != null && resultRoom != null && resultType != null)
                {
                    //append all of this information in one array and return it for
                    //load method to use
                }        
                else(console.log("invalid entries for ", resultSubject))    
            }
            else(console.log(resultSubject, "does not exist"))

        }
    }
    1   
    //for each line 
    static load (datafile, callback)
    {
        const fs = require('fs');
        const lines = [];
        fs.readFile('muncourses.txt', 'utf8', (err, data) => 
            {
                if (err) throw err;
                const lines = data.split('\n');
                //console.log(lines);


                //need to call catagorize method here
            }
        );
    }
}


const line = Course.load("muncourses.txt");