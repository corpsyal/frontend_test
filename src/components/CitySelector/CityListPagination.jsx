import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';


const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 16px;

    span.previous, span.next {
        cursor: pointer;
    }
`

const CityListPagination = ({onPrevious, page, onNext}) => {

    return (
        <Wrapper>
            <span className='previous' onClick={onPrevious}> {`<`} </span>
            <span>{page}</span>
            <span className='previous' onClick={onNext}>{`>`}</span>
        </Wrapper>
    )
}

CityListPagination.propTypes = {
    onPrevious: PropTypes.func,
    page: PropTypes.number,
    onNext: PropTypes.func,
};

export default CityListPagination