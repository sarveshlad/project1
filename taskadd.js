function add_record(){
    var id = document.getElementById("loanId").value;
    var amount = document.getElementById("loanAmount").value;
    var loandate = document.getElementById("loanDate").value;

    //do validation
    var xmlObj = new XMLHttpRequest();
    console.log(xmlObj);

    xmlObj.onreadystatechange =function(){
        if(xmlObj.readyState==4 && xmlObj.status==200 ){
            console.log(xmlObj.responseText);
            document.getElementById("message").innerHTML = "Record Added";
        }
    }

    xmlObj.open("post","http://localhost:3000/loanRecord",true);
    xmlObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var record = `loan_id=${id}&loan_amount=${amount}&loan_date=${loandate}`;

    // xmlObj.setRequestHeader("Content-type", "application/json");
    // var record = {loan_id:id , loan_amount:amount , loan_date:loandate}

    xmlObj.send(record); 
}