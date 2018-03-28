import React from 'react'
import 'font-awesome/css/font-awesome.css'
import FontAwesome from 'react-fontawesome'

class Icons extends React.Component {
  /*
  -----------------------------------------------------
    Model
  -----------------------------------------------------
  */

  state = {
    icons: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/brent-brinkley-21932435/'
      },
      {
        name: 'github',
        link: 'https://github.com/IamEchelon'
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/BrentsMind'
      }
    ]
  }

  /*
  -----------------------------------------------------
    render
  -----------------------------------------------------
  */

  render() {
    const styles = {
      display: 'flex',
      justifyContent: 'center'
    }

    const iconStyles = {
      padding: 10,
      margin: 4,
      color: 'white'
    }

    return (
      <div css={styles}>
        {this.state.icons.map((icon, index) => (
          <a href={icon.link} key={index}>
            <FontAwesome name={icon.name} style={iconStyles} size="2x" />
          </a>
        ))}
      </div>
    )
  }
}

export default Icons
