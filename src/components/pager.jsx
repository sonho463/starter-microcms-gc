import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Pager(props) {
  const { currentPage, isLast, isFirst } = props

  return (
    <>
        {/* Pager*/}
      <PageNation>
          {!isLast && (
            <Link
              className="btn btn-primary float-right"
              to={`/${currentPage + 1}/`}
              rel="prev"
            >
              ←　Old
            </Link>
          )}
          {!isFirst && (
            <Link
              className="btn btn-primary float-right"
              to={currentPage === 2 ? `/` : `/${currentPage - 1}/`}
              rel="next"
            >
              New →
            </Link>
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
