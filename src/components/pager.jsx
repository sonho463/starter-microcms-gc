import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Pager(props) {
  const { currentPage, isLast, isFirst, prev, next } = props

  return (
    <>
      {/* Pager*/}
      <PageNation>
        {!isLast ? (
          <Link className="btn btn-primary" to={`/${prev}/`} rel="prev">
            ←　Old
          </Link>
        ) : (
          <div　className="btn btn-primary">いちばん古い</div>
        )}
        {!isFirst ? (
          <Link
            className="btn btn-primary"
            to={currentPage === 2 ? `/` : `/${next}/`}
            rel="next"
          >
            New →
          </Link>
        ) : (
          <div　className="btn btn-primary">いちばん新しい</div>
        )}
      </PageNation>
    </>
  )
}

const PageNation = styled.div`
  width: 100vh;
  display: flex;
  justify-content: space-between;
`
