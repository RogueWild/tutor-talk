import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import AccountHeader from '../comps/Header';
import StudentSuccessLottie from '../comps/Lotties/StudentSuccessLottie';
import Button from '../comps/Button';

import { Router, useRouter } from 'next/router'

export default function SignUp() {

    const router = useRouter();

    const handleCreateProfile = async () => {
        router.push('/StudentProfileEdit');
    }

    return (
        <div className="student-success">
            <LogoHeader profileDisplay="none" />
            <div className="inside">
                <div className="lottie">
                    <StudentSuccessLottie />
                </div>
                <div className="message">
                    <AccountHeader text="Success!" color="#424242" fontSize="34px" fontWeight="500" />
                    <AccountHeader text="Start by creating your profile" color="#424242" fontSize="24px" fontWeight="normal" />
                    <div className="button">
                        <Button text="Continue" fontSize="18px" onClick={handleCreateProfile} />
                    </div>
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}