export const  GetData=(url)=> {
    let p = new Promise(function (resolve, reject)
     {
      fetch(url).then(response => response.json())
      .then(commits => resolve(commits.data)).
      catch((error)=>{reject(error) })
      } )
  return p;
  };