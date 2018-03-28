import React from 'react'
import mojs from 'mo-js'

const burst = new mojs.Burst({
  radius: { 0: 100 },
  count: 7,
  angle: { 0: 90 },
  opacity: { 1: 0 }
})

/*
-----------------------------------------------------
 Styles
-----------------------------------------------------
*/

const nav = {
  bar: {
    padding: '0 10px',
    backgroundColor: 'DarkSlateBlue',
    backgroundImage: 'linear-gradient(to right, DarkSlateBlue, tomato)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: '10',
    borderTopRightRadius: '10'
  },
  title: {
    color: 'white',
    padding: '5px 15px',
    margin: '10px 15px',
    border: 'white solid 1px',
    borderRadius: 5
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0',
    listStyle: 'none'
  }
}

/*
-----------------------------------------------------
 render
-----------------------------------------------------
*/

const fakeLinks = ['home', 'blog', 'about']

const Navbar = () => (
  <div css={nav.bar}>
    <div css={nav.title}>Logo</div>
    <div>
      <ul css={nav.links}>
        {fakeLinks.map((link, index) => (
          <li key={index} css={{ margin: 0 }}>
            <a
              href="#"
              css={{ color: 'white', margin: '0px 10px' }}
              onClick={e => burst.replay}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Navbar
