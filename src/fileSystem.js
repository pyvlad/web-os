const files = [
  {
    id: 1,
    type: "directory",
    name: "home",
    parentId: null
  },
  {
    id: 2,
    type: "directory",
    name: "examples",
    parentId: 1
  },
  {
    id: 3,
    type: "file",
    name: "example.pdf",
    parentId: 2
  },
  {
    id: 4,
    type: "file",
    name: "example.docx",
    parentId: 2
  }
]

export default files