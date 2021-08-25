
async function getGitApi(user) {
    try{
        const response = await fetch("https://api.github.com/users/"+user+"/repos");
        let userdetails = await response.json();

        console.log(userdetails);
      
        avatarimage = userdetails[0].owner.avatar_url;
        console.log(avatarimage);
        const heading = document.createElement("h2");
heading.setAttribute("class","heading");
const overall = document.createElement("div");
overall.setAttribute("class","overall");
const userimage = document.createElement("img");
userimage.setAttribute("class","image");
      
        heading.innerText = "List of Repository";
        
        userimage.setAttribute("src",avatarimage);
        overall.append(userimage);
        document.body.append(heading,overall);
     
        console.log(document.getElementsByClassName("heading")[0].innerText);
        
        userdetails.forEach(element => getUserRepos(element));
    }
    catch(err){
        console.log(err);
    }    
    
}

function getUserRepos(user){

    console.log(user.owner.login);
    const repoName = user.name;
    const repoURL = user.clone_url;
    const repoForkCount = user.forks_count;
    const repoStarCount = user.stargazers_count;
    

 
    const info = document.createElement("div");
    
    info.setAttribute("class","container");

  

    const repodetail = document.createElement("div");
    repodetail.setAttribute("class","repo");

    repodetail.innerHTML = `
    <div class = "details">
        <h3><a target="_blank" href=${repoURL}>${repoName}  </a></h3>
        <p>Fork Count : ${repoForkCount}</p>
        <p>Star Count : ${repoStarCount}</p>
    </div>   
    `;
    info.append(repodetail);

    //details.append(info);
    console.log(info);
    document.body.append(info);
 
    
}




// const details = document.createElement("div");
// details.setAttribute("class","details");


// document.body.append(heading,overall,details);



const searchinput = document.createElement("div");
const githead = document.createElement("h1");
githead.innerText = "Enter the Username to list repos";

const inputuser = document.createElement("input");
inputuser.setAttribute("class","inputuser");
inputuser.setAttribute("type","text");
inputuser.setAttribute("placeholder","username");
const search = document.createElement("input");
search.setAttribute("class","searchbox");
search.setAttribute("value","Search");
search.setAttribute("type","submit");
search.setAttribute("onclick","getUsername()");

searchinput.append(githead,inputuser,search);
document.body.append(searchinput);





function getUsername(){

    
   //document.getElementsByClassName("details").innerHTML = "";
    const username = document.getElementsByClassName("inputuser")[0].value;
    getGitApi(username);
    document.getElementsByClassName('inputuser')[0].value = '';
    //document.getElementsByClassName("heading")[0].innerText= '';
    // document.getElementsByClassName("overall")[0].value= '';
   
}

// const username = "alvinprabhakar";
// getGitApi(username);