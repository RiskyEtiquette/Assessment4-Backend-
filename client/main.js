const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
document.getElementById("fortuneButton").addEventListener("click", async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/fortune/");
        const fortune = response.data;
        document.getElementById("fortuneText").textContent = fortune;
    } catch (error) {
        console.error("Error fetching fortune:", error);
    }

});
document.getElementById("compliments").addEventListener("click", async () => {
    try {
        var elements = document.body.getElementsByClassName("getAll")
        if(elements.length > 0){
            var array = Array.from(elements)
            array.forEach(element => {
               document.body.removeChild(element)
            });
        }
        const response = await axios.get("http://localhost:4000/api/compliments/");
        const compliments = response.data;
        for (let index = 0; index <compliments.length; index++) {
            const compliment = compliments[index];
            var putComplimentInput = document.createElement("input")
            putComplimentInput.setAttribute("class", "getAll")
            var putComplimentButton = document.createElement("button")
            putComplimentButton.setAttribute("class", "getAll")
            var deleteComplimentButton = document.createElement("button")
            deleteComplimentButton.setAttribute("class", "getAll")
            putComplimentInput.value = compliment
            putComplimentButton.textContent = `change ${compliment}`
            deleteComplimentButton.textContent = `delete ${compliment}`
            putComplimentButton.addEventListener("click", () => putComplimentButtonFunction(compliment, putComplimentInput.value))
            deleteComplimentButton.addEventListener("click",() => deleteComplimentButtonFunction(compliment))
            
            document.body.appendChild(putComplimentInput)
            document.body.appendChild(putComplimentButton)
            document.body.appendChild(deleteComplimentButton)
        }
   } catch (error) {
        console.error("Error fetching fortune:", error);
    }

});
const putComplimentButtonFunction = (oldCompliment, compliment) => {
     axios.put("http://localhost:4000/api/compliment/", { text: compliment, oldText: oldCompliment },{
        headers: {
          'Content-Type': 'application/json'
        }})
        .then(res => {
            const data = res.data;
        
    });
};
const deleteComplimentButtonFunction = (compliment) => {
    axios.delete("http://localhost:4000/api/compliment/", { text: compliment},{
        headers: {
          'Content-Type': 'application/json'
        }})
        .then(res => {
            const data = res.data;
        
    });
};
var input = document.getElementById("creatComplimentInput")
document.getElementById("creatComplimentButton").addEventListener("click", async () => {
    try {
        const response = await axios.post("http://localhost:4000/api/compliment/", { text: input.value },{
            headers: {
              'Content-Type': 'application/json'
            }
        });
        console.log("Server response:", response.data.message);
    } catch (error) {
        console.error("Error:", error.message);
    }
});
