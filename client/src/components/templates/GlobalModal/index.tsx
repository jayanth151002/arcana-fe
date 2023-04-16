
import React from 'react'
import { useSelector } from 'react-redux';
import CompanyModal from '../../organisms/CompanyModal';
import { RootState } from '../../../state/store';

const GlobalModal = () => {
    const isModalOpen = useSelector((state: RootState) => state.activeEntities.isModalOpen);
    return isModalOpen ? <CompanyModal /> : <></>
}

export default GlobalModal
