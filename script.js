
async function getUsers() {
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", {
      method: "GET"
      
    });
    
  const users = await data.json();
  console.log(users)

  $(function () {
    $('#table').bootstrapTable({
        data: users
    });
});

}

getUsers();
