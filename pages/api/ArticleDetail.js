export const ArticleDetail = async (id) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
  );

  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    ArticleId: id,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    process.env.BASE_URL + "/api/rozgaarapi/GetSingleArticle",
    requestOptions
  );
  if (!response.ok) {
    console.log("Api Error", response.status);
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error); // you may also
  }
};
