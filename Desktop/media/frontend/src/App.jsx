import React from 'react'
import UploadForm from './components/UploadForm'
import UploadList from './components/UploadList'

function App() {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card"
                        style={{
                            height: "auto",
                            width: "600px",
                            margin: "40x",
                            border: "1px solid black"
                        }}>
                        <div className="card-body">
                        <UploadForm/>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card"
                        style={{
                            height: "auto",
                            width: "600px",
                            margin: "40x",
                            border: "1px solid black"
                        }}>

                        <div className="card-body"><UploadList/></div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default App