
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormLabel,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BASE_URL from "../API/Api";

const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/CustomerLogin/forget-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("msg-->", responseData.message);
        toast.success(responseData.message);
        navigate("/");
      } else {
        const errorData = await response.json();
        console.error("Reset failed:", errorData);
        toast.error(errorData.error);
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Error resetting");
    } finally {
      setLoading(false);
    }
  };
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh] w-[100%]">
          <CSpinner size="lg" className="my-auto mx-auto text-gray-400" />
        </div>
      ) : (
        <>
          <div className="bg-[#e1e2e4] min-vh-100 d-flex flex-row align-items-center">
            <CContainer className="">
              <button
                onClick={handleBackClick}
                className="  bg-sky-800 hover:bg-sky-900 text-white lg:ms-5 md:ms-4 ms-1 lg:my-1 my-3 w-[fit-content] h-[fit-content] py-0 px-3 rounded-md"
              >
                <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
              </button>
              <CRow className="justify-content-center ">
                <CCol lg={6} md={8} className="">
                  <CCard className="mx-4 bg-white text-black rounded-xl ">
                    <CCardBody className="p-4">
                      <CForm>
                        <h1 className="text-center text-xl my-4">
                          <b>Reset Password</b>
                        </h1>

                        <CInputGroup className="mb-3">
                          <div className="flex items-center sm:w-[20%] w-[90%]">
                            <CFormLabel>Enter email:</CFormLabel>
                          </div>
                          <div className="flex gap-2 sm:w-[80%] w-[100%]">
                            <CInputGroupText className="bg-gray-500 text-white h-[36px]">
                              @
                            </CInputGroupText>
                            <CFormInput
                              className="h-[36px]"
                              placeholder="Enter Email here"
                              autoComplete="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </CInputGroup>

                        <div className="flex justify-center ">
                          <CButton
                            onClick={handleReset}
                            className="w-[fit-content] py-2 bg-sky-800 hover:bg-sky-900 text-white transition duration-300 border-none"
                          >
                            Reset
                          </CButton>
                        </div>
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
          </div>
        </>
      )}
    </>
  );
};

export default Forgot;
