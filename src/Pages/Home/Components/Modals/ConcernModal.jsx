import React from 'react'
import OndutyTable from '../Table/OndutyTable'
import IssuesTable from '../Table/IssuesTable'
import AbsentTable from '../Table/AbsentTable'

function ConcernModal() {
  return (
    <div id='Concerns' className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
                <div className="modal-title"><h4 className='fw-bolder text-white bg-dark px-4 py-2 rounded-5'>Concerns</h4></div>
                <div className="modal-body">
                    <ul className="nav nav-pills" id="myTab">
                        <li className="nav-item">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#attendance" >Absents</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#onDuty">Onduty</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Issues" >Issues</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <AbsentTable/>
                        <OndutyTable />
                        <IssuesTable/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ConcernModal