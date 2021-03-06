import React from 'react'
import { Document, Page } from "react-pdf"
import { makeStyles } from '@material-ui/styles'
import { Typography, Link } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  message: {
    padding: theme.spacing(2)
  },
  root: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.grey[800],
    height: "100%",
    position: "relative"
  },
  header: {
    backgroundColor: theme.palette.grey[800],
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  pdf: {
    position: "absolute",
    top: 50,
    bottom:0,
    right: 0,
    left: 0,
    overflow: "scroll"
  },
  pageCounter: {
    color: theme.palette.primary.contrastText
  }
}))


export default (props) => {
  const {
    fileUrl,
    onDocumentLoadSuccess,
    goToPrevPage,
    goToNextPage,
    pageNumber,
    numPages
  } = props

  const classes = useStyles()

  if (!fileUrl) {
    return (
      <Typography variant="subtitle1" component="p" className={classes.message}>
        Please select document to show. Note: this viewer will use custom PDF viewer 
        built with react-pdf.
      </Typography>
    )
  }

  const errorComponent = (
    <Typography variant="subtitle1" component="p" className={classes.message}>
      Rendering failed. <Link href={ fileUrl }>Download file</Link>.
    </Typography>
  )

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.pageCounter}>Page {pageNumber} of {numPages}</div>
        <nav>
          <button onClick={goToPrevPage}>Prev</button>
          <button onClick={goToNextPage}>Next</button>
        </nav>
      </div>
      <div className={classes.pdf}>
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="loading PDF..."
          error={errorComponent}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  )
} 