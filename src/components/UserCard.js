import Axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Card, CardBody } from "reactstrap";
import { UserContext } from "../context/UserContext";

const UserCard = ({user}) => {

    return (
        <Card className="text-center mt-3 mb-4"> 
            <img src={user.avatar_url} className="img-thumbnail" height="200px"/>
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                {/* <div className="text-info">Availale for hire: {user.hirable?"Yup":"Nope"}</div> */}
                <div className="text-info">Followers: {user.followers}</div>
            </CardBody>
        </Card>
    )
} 

export default UserCard;