import React from 'react' 
import MaterialTable from '@material-table/core'
import XLSX from 'xlsx'
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable' 

const studentData = [
    {
      id: 1,
      name: "Neeraj",
      email: "neeraj@gmail.com",
      year: 2015,
      fee: 167000,
    },
    {
      id: 2,
      name: "Vikas",
      email: "vikas@gmail.com",
      year: 2013,
      fee: 785462,
    },
  
    {
      id: 3,
      name: "Rahul",
      email: "rahul@gmail.com",
      year: 2020,
      fee: 784596,
    }
  ]

export const ComboTable = ({title}) => {

    const columns = [
        { title: "Combo ID", field: "name", },
        { title: "Combo Name", field: "email", },
        { title: "Combo Price", field: "year", type: "numeric" },
        { title: "List of labs", field: 'fee', type: "currency" }, 
        { title: "Turn Around Time", field: 'fee', type: "currency" }
    ]
    
    //   const downloadExcel = () => {
    //     const newData = studentData.map(row => {
    //       delete row.tableData
    //       return row
    //     })
    //     const workSheet = XLSX.utils.json_to_sheet(newData)
    //     const workBook = XLSX.utils.book_new() 

    //     XLSX.utils.book_append_sheet(workBook, workSheet, "students")
    //     //Buffer
    //     XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })
    //     //Binary string
    //     XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
    //     //Download
    //     XLSX.writeFile(workBook, "StudentsData.xlsx")
    
    //   }


      const downloadPdf = () => {
        const doc = new jsPDF()
        doc.text("Student Details", 20, 10)
        doc.autoTable({
          theme: "grid",
          columns: columns.map(col => ({ ...col, dataKey: col.field })),
          body: studentData
        })
        doc.save('table.pdf')
      }


  return (
    <div>
    
    <MaterialTable
        title={title}
        columns={columns}
        data={studentData}
        actions={[
          {
            icon: () => <button className="export-button">Export</button>,// you can pass icon too
            tooltip: "Export to Excel",
            // onClick: () => downloadExcel(),
            isFreeAction: true
          },
          {
            icon: () => <PrintIcon />,// you can pass icon too
            tooltip: "Export to Pdf",
            onClick: () => downloadPdf(),
            isFreeAction: true
          },
          {
            icon: () => <button className="add-lab-button">Create Test Combos</button>,
            tooltip: "Export to Pdf",
            onClick: () => downloadPdf(),
            isFreeAction: true
          }
        ]}
      />

          {/* modal */}
            <div class="offcanvas offcanvas-end" id="add-new-record">
                  <div class="offcanvas-header border-bottom">
                   <h5 class="offcanvas-title" id="exampleModalLabel">New Laboratory</h5>
                   <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body flex-grow-1">
                  <form class="add-new-record pt-0 row g-2" id="form-add-new-record" onsubmit="return false">
                    <div class="col-sm-12">
                      <label class="form-label" for="basicFullname">Lab Name</label>
                      <div class="input-group input-group-merge">
                        <span id="basicFullname2" class="input-group-text"><i class="bx bx-user"></i></span>
                        <input
                          type="text"
                          id="basicFullname"
                          class="form-control dt-full-name"
                          name="basicFullname"
                          placeholder="John Doe"
                          aria-label="John Doe"
                          aria-describedby="basicFullname2"
                        />
                      </div>
                    </div>
                   
                    <div class="col-sm-12">
                      <label class="form-label" for="basicEmail">Lab Email</label>
                      <div class="input-group input-group-merge">
                        <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                        <input
                          type="text"
                          id="basicEmail"
                          name="basicEmail"
                          class="form-control dt-email"
                          placeholder="john.doe@example.com"
                          aria-label="john.doe@example.com"
                        />
                      </div>
                      {/* <div class="form-text">You can use letters, numbers & periods</div> */}
                    </div>
                    <div class="col-sm-12">
                      <label class="form-label" for="basicEmail">Lab Phone Contact</label>
                      <div class="col-sm-10">
                            <input
                              type="text"
                              id="basic-default-phone"
                              class="form-control phone-mask"
                              placeholder="658 799 8941"
                              aria-label="658 799 8941"
                              aria-describedby="basic-default-phone"
                            />
                          </div>
                      
                    </div>
                    <div class="col-sm-12">
                    <label class="form-label" for="basicPost">Lab Location</label>
                      <div class="input-group input-group-merge">
                        <span id="basicPost2" class="input-group-text"><i class="bx bxs-briefcase"></i></span>
                        <input
                          type="text"
                          id="basicPost"
                          name="basicPost"
                          class="form-control dt-post"
                          placeholder="Web Developer"
                          aria-label="Web Developer"
                          aria-describedby="basicPost2"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <label class="form-label" for="basicDate">Joining Date</label>
                      <div class="input-group input-group-merge">
                        <span id="basicDate2" class="input-group-text"><i class="bx bx-calendar"></i></span>
                        <input
                          type="text"
                          class="form-control dt-date"
                          id="basicDate"
                          name="basicDate"
                          aria-describedby="basicDate2"
                          placeholder="MM/DD/YYYY"
                          aria-label="MM/DD/YYYY"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <label class="form-label" for="basicSalary">Salary</label>
                      <div class="input-group input-group-merge">
                        <span id="basicSalary2" class="input-group-text"><i class="bx bx-dollar"></i></span>
                        <input
                          type="number"
                          id="basicSalary"
                          name="basicSalary"
                          class="form-control dt-salary"
                          placeholder="12000"
                          aria-label="12000"
                          aria-describedby="basicSalary2"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <button type="submit" class="btn btn-primary data-submit me-sm-3 me-1">Submit</button>
                      <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                    </div>
                  </form>
                </div>
               </div> 
         </div>
  )
}
