async function loadFood(){
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Error loading food");
        }
        const data = await response.json();
        console.log(data);
        
        const foodName = data.meals[0].strMeal;
        const foodImage = data.meals[0].strMealThumb;
        document.getElementById("displayFood").textContent = foodName;
        document.getElementById("mealImage").src = foodImage;

    }catch(e){
        document.getElementById("displayFood").textContent = "Error loading food";
        console.log(e);
    }
}