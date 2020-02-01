/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { 
  AccordionCheckbox, 
  Label, 
  Checkbox 
} from '../../../containers/HomePage/styles';

function MediaTypesFilter({
  mediaTypes,
  mediaType, 
  onFilteredMediaTypeChange
}) {
  const accordionCheckboxs = mediaTypes.map((item, index) => (
    <AccordionCheckbox key={index}>
      <Label>
        <Checkbox 
          type={'radio'}
          name={'media_type_filter'}
          value={item.TIP}
          checked={mediaType === item.TIP ? true : false}
          onChange={onFilteredMediaTypeChange}
          />
        <span>{' '}{item.TIP}</span>
      </Label>
    </AccordionCheckbox>
  ));

  return (
    <React.Fragment>
      <AccordionCheckbox>
        <Label>
          <Checkbox 
            type={'radio'}
            name={'media_type_filter'}
            value={null}
            onChange={onFilteredMediaTypeChange}
            />
          <span>{' '}TODAS</span>
        </Label>
      </AccordionCheckbox>
      {accordionCheckboxs}
    </React.Fragment>
  );
}

MediaTypesFilter.propTypes = {
  mediaTypes: PropTypes.array.isRequired
};

export default memo(MediaTypesFilter);