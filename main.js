const linksSocialMedia = {
  github: 'DanielSoaresCC',
  youtube: 'DanielSoares',
  instagram: 'dsoareso',
  facebook: 'daniel.soares.9480',
  twitter: 'danielsoares153'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLinkGithub.href = data.html_url
      userProfilePicture.src = data.avatar_url
      userGithubLogin.textContent = data.login
    })
}
getGithubProfileInfos()
