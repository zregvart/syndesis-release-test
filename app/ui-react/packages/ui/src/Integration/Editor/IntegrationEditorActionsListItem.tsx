import {
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
} from '@patternfly/react-core';
import * as React from 'react';
import { toValidHtmlId } from '../../helpers';

export interface IIntegrationEditorActionsListItemProps {
  name: string;
  description: string;
  actions: any;
}

export const IntegrationEditorActionsListItem: React.FunctionComponent<IIntegrationEditorActionsListItemProps> = ({
  name,
  description,
  actions,
}) => {
  const nameId = toValidHtmlId(name);
  const ariaLabel = `actions list item ${nameId}`;
  return (
    <DataListItem
      aria-labelledby={ariaLabel}
      data-testid={`integration-editor-actions-list-item-${nameId}-list-item`}
    >
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell
              key={0}
              width={2}
              aria-label={'editor actions list item name'}
            >
              <b id={ariaLabel}>{name}</b>
            </DataListCell>,
            <DataListCell key={1} width={4}>
              {name === description ? null : <>{description}</>}
            </DataListCell>,
          ]}
        />
        <DataListAction
          aria-labelledby={ariaLabel}
          id={'editor-actions-list-item-action'}
          aria-label={'editor-actions-list-actions'}
        >
          {actions}
        </DataListAction>
      </DataListItemRow>
    </DataListItem>
  );
};
