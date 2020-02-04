import { isSectionNameValid } from '../../libs/Validator';

describe('should validate section name without failing', () => {
    
    test('should return false for empty string', () => {
        expect(isSectionNameValid('')).toBe(false);
    })

    describe('should return false if data type is not string', () => {
        
        test('should return false if section name is a #', () => {
            expect(isSectionNameValid(9)).toBe(false);
        })

        test('should return false if section name is an {}', () => {
            expect(isSectionNameValid({})).toBe(false);
        })

        test('should return false if section name is null', () => {
            expect(isSectionNameValid(null)).toBe(false);
        })

        test('should return false if section name is NaN', () => {
            expect(isSectionNameValid(NaN)).toBe(false);
        })
    })
})