module.exports = {
   
    getCompliment: (req, res) => {
       
        // Choose random compliment
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getCompliments: (req, res) => {
   
       
        res.status(200).send(compliments);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "You will find unexpected joy today.",
            "A pleasant surprise awaits you.",
            "Your hard work will pay off soon.",
            "Good things come to those who wait.",
            "Your creativity will lead to success."
        ];

        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
createCompliment: (req, res) => {
        compliments.push(req.body.text)
        res.status(200).send()
    },
putCompliment: (req, res) => {
    const index = compliments.indexOf(req.body.oldText)
    compliments[index] = req.body.text
    
         res.status(200).send()
     },
 deleteCompliment: (req, res) => {
    const index = compliments.indexOf(req.body.text)
    compliments.splice(index, 1)
         res.status(200).send()
     }
    };
compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar."
];