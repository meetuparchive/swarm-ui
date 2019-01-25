
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Fri, 25 Jan 2019 22:52:06 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.48f green:0.11f blue:0.28f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.07f blue:0.33f alpha:1.00f],
[UIColor colorWithRed:0.96f green:0.35f blue:0.35f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.68f blue:0.26f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.27f blue:0.36f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.60f blue:0.67f alpha:1.00f],
[UIColor colorWithRed:0.59f green:0.79f blue:0.82f alpha:1.00f],
[UIColor colorWithRed:0.58f green:0.50f blue:0.37f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.78f green:0.00f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:0.97f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.21f green:0.47f blue:0.89f alpha:1.00f],
[UIColor colorWithRed:0.96f green:0.97f blue:0.97f alpha:1.00f],
[UIColor colorWithRed:0.90f green:0.90f blue:0.90f alpha:1.00f],
[UIColor colorWithRed:0.85f green:0.85f blue:0.85f alpha:1.00f],
[UIColor colorWithRed:0.77f green:0.77f blue:0.77f alpha:1.00f],
[UIColor colorWithRed:0.64f green:0.64f blue:0.64f alpha:1.00f],
[UIColor colorWithRed:0.35f green:0.35f blue:0.35f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.96f green:0.97f blue:0.97f alpha:1.00f],
[UIColor colorWithRed:0.77f green:0.77f blue:0.77f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f]
    ];
  });

  return colorArray;
}

@end
