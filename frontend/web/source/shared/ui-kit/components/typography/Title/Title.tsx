import React from 'react';
import classNames from 'classnames';

import { Typography, TypographyProps } from '../Typography/Typography.tsx';
import styles from './Title.module.css';

interface TitleProps extends TypographyProps {
    level?: '1' | '2' | '3';
}

const Title = function ({
    Component,
    level = '1',
    normalize,
    weight,
    className,
    ...restProps
}: TitleProps) {
    if (!Component) {
        Component = `h${level}` as React.ElementType;
    }

    return (
        <Typography
            Component={Component}
            weight={weight}
            normalize={normalize}
            className={classNames(
                className,
                level &&
                    {
                        '1': styles['Title--level-1'],
                        '2': styles['Title--level-3'],
                        '3': styles['Title--level-2'],
                    }[level],
            )}
            {...restProps}
        />
    );
};

export type { TitleProps };
export { Title };
