const files = [
  {
    id: 1,
    type: "directory",
    name: "home",
    url: process.env.PUBLIC_URL + "/root/",
    parentId: null
  },
  {
    id: 2,
    type: "directory",
    name: "examples",
    url: process.env.PUBLIC_URL + "/root/examples/",
    parentId: 1
  },
  {
    id: 3,
    type: "file",
    url: process.env.PUBLIC_URL + "/root/examples/example.pdf",
    name: "example.pdf",
    parentId: 2
  },
  {
    id: 4,
    type: "file",
    url: process.env.PUBLIC_URL + "/root/examples/example.docx",
    name: "example.docx",
    parentId: 2
  }
]

export default files