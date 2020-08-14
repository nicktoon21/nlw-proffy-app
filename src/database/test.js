const createProffy = require('./createProffy');
const Database = require('./db');

Database.then( async (db) => {
    proffyValue = {
        name:"Nicolas Aguiar",
        avatar:"https://avatars3.githubusercontent.com/u/51923372?s=400&u=41aa2334c7e5a8b335e1f30764112c668c42e540&v=4",
        whatsapp:"89989889755",
        bio:"Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        
    }

    classValue = {
        subject: 1,
        cost:"20",
    }

    classScheduleValues = [
        {
            weekday:1,
            time_from:720,
            time_to:1220
        },
        {
            weekday:0,
            time_from:520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues });


    const selectedProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `);

    //console.log(selectedProffys);


    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules);
})