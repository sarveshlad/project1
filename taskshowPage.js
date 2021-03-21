async function getValues() {
    let result =  await fetch("http://localhost:3000/loanRecord");
    // console.log(result)
    // console.log(result.json())
    var answer = result.json();
    return answer;
}

result = getValues();
// console.log(result);
result.then(function(response){
    // console.log(response);
    if(response.length > 0){
        var str = ``;

        for(obj of response){
            // console.log(obj);
            str = str + `
                <tr>
                    <td>${obj.id}</td>    
                    <td>${obj.loan_id}</td>    
                    <td>${obj.loan_amount}</td>    
                    <td>${obj.loan_date}</td>    
                </tr>
            `
        }
        // console.log(str);
        document.querySelector("tbody").innerHTML = str;
    }
})
.catch(function(error){
    console.log(error)
})