async function getUsers() {
  const data = await fetch(
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
    {
      method: "GET"
    }
  );

  const users = await data.json();
  console.log(users);

  $(function() {
    $("#table").bootstrapTable({
      data: users
    });
  });
}

getUsers();

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {

  const msg = (mq.matches ? "more" : "less") + " than 500 pixels";
  document.getElementById("current").firstChild.nodeValue = msg;

}
