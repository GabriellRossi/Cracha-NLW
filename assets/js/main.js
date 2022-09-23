const LinksSocialMedia = {
  github: 'GabriellRossi',
  linkedin: 'gabriellrossi',
  instagram: 'rossi_digital',
  twitter: 'Gabriel__Rossi1',
  facebook: 'GBLRossi',
  youtube: 'maykbrito'
}


function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    
  }
}

changeSocialMediaLinks()