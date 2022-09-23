const LinksSocialMedia = {
  github: 'GabriellRossi',
  youtube: 'maykbrito',
  instagram: 'rossi_digital',
  facebook: 'GBLRossi',
  twitter: 'Gabriel__Rossi1',
  linkedin: 'gabriellrossi'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
