function fetchBooks(){
    const xhr=new XMLHttpRequest();
    const url='https://dog.ceo/api/breeds/image/random';

    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                const dog_response=JSON.parse(xhr.responseText);
                const image_element=document.getElementById('dog_img');
                image_element.src=dog_response.message;
            }
        }
        else{
            console.log("Error ",xhr.status);
        }
    }
    xhr.open('GET',url,true);
    xhr.send();
}