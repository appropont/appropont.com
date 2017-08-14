import React, { Component } from 'react'

import { Heading, NavLink, Tabs, TabItem, Flex, Box } from 'rebass'

export default (Wrapped) => {
  return class extends Component {
    
    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}

      return wrapped;
    }

    componentDidMount() {}

    navItems = [
      { name: 'Blog', url: '/blog' },
      { name: 'Projects', url: '/projects' }
    ];

    render() {
      const { url } = this.props
      console.log(url)
      return (
        <div className="page">
          <Box
            className="header">
            <div className="page-wrapper">
              <Flex wrap>
                <Box w={[1, 1/4]}>
                    <NavLink href="/">
                      <Heading
                        fontSize={[ 2, 3 ]}>
                        Appropont
                      </Heading>
                    </NavLink>
                </Box>
                <Box w={[1, 3/4]}>
                  <span className="links">
                    <Tabs>
                      {
                        this.navItems.map(navItem => (
                          <TabItem
                            href={navItem.url}
                            mx={0}
                            px={2}
                            fontWeight={700}
                            bold
                            active={navItem.url === url.pathname}>
                            {navItem.name}
                          </TabItem>
                        ))
                      }
                    </Tabs>
                  </span>
                </Box>
              </Flex>
            </div>
          </Box>

          <div className="page-wrapper">
            <Wrapped {...this.props} />
          </div>

          <style jsx>{`

            .page-wrapper {
              padding: 0 20px;
              max-width: 1200px;
              margin: 0 auto;
            }

            .links {
              float: right;
            }
          `}</style>
        </div>
      )
    }
  }
}