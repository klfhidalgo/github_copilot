const fetchGitHubUser = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    let isError = false;
    let errorMessage = '';
    let data = null;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            isError = true;
            errorMessage = `Error fetching data: ${response.statusText}`;
        } else {
            data = await response.json();
        }
    } catch (error) {
        isError = true;
        errorMessage = error.message;
    }
    
    return { data, isError, errorMessage };
};