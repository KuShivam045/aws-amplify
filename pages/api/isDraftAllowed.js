export const checkIsDraftAllowed = async (userId) => {
    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        UserId: userId,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    const response = await fetch(
        process.env.BASE_URL + "/api/client/IsDraftAllowed",
        requestOptions
    );
    if (!response.ok) {
    }
    try {
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
};
