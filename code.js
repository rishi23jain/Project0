function Client(FirstName,LastName,Email,Seller,City,MobileNo,Profile,Password){
     this.Fname = FirstName;
     this.Lname = LastName;
     this.mail = Email;
     this.seller =Seller;
     this.city =City;
     this.number =MobileNo;
     this.profileimg =Profile;
     this.password =Password;
     this.Seller_Info =function(){
          document.write(`${FirstName} ${LastName}` +'<br>');
          document.write(`${Email}` +"<br>");
          document.write(`${MobileNo}` +"<br>");
    }
    this.firstname =function(){
        document.write(`Your first name is ${FirstName}`);
    }
    this.lastname =function(){
        document.write(`Your last name is ${LastName}`);
    }
    this.last_password =function(){
        document.write(`Your last password is ${Password}`)
    }
}

function Update(fname,lname){
    this.change =function(){
        this.FirstName =fname;
        this.LastName =lname;
    }  
}


