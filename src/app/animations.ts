import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.2s ease-in')
        ]),
        transition(':leave', [
            animate('0.5s ease-out', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);

export const fadeIn: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translate(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translate(0)'
            }),
            animate('0.2s ease-in')
        ]),
        transition(':leave', [
            animate('0s ease-out', style({
                opacity: 0,
                transform: 'translate(0)'
            }))
        ])
    ]);
