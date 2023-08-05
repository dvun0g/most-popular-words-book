import React from 'react';
import classNames from 'classnames';

import { HasComponent } from '../../../types';
import styles from './Typography.module.css';

interface TypographyProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    weight?: '1' | '2' | '3';
    normalize?: boolean;
}

const Typography = function ({
    Component = 'span',
    weight = '3',
    normalize = true,
    className,
    ...restProps
}: TypographyProps) {
    return (
        <Component
            {...restProps}
            className={classNames(
                className,
                normalize && styles['Typography--normalize'],
                weight &&
                    {
                        '1': styles['Typography--weight-1'],
                        '2': styles['Typography--weight-2'],
                        '3': styles['Typography--weight-3'],
                    }[weight],
            )}
        />
    );
};

export type { TypographyProps };
export { Typography };
