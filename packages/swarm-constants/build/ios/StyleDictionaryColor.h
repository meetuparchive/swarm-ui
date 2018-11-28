
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Wed, 28 Nov 2018 15:19:23 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorMerlot,
ColorMeetupRed,
ColorPeach,
ColorMarigold,
ColorIndigo,
ColorViridian,
ColorBeach,
ColorOldGold,
ColorWhite,
ColorAlertRed,
ColorBeachHighlight,
ColorTooltipBlue,
ColorGray1,
ColorGray2,
ColorGray3,
ColorGray4,
ColorGray5,
ColorGray6,
ColorGray7,
ColorFontBase,
ColorFontSecondary,
ColorFontTertiary
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
