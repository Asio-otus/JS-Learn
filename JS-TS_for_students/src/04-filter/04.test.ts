import {CourseType} from "./04";

test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take courses chipper then 160', () => {
    const courses: Array<CourseType> = [
        {title: 'css', price: 100},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ]

    const predicate = (course: CourseType) => {
        return course.price < 160;
    }

    const cheatCourses = courses.filter(predicate)

    expect(cheatCourses.length).toBe(2);
    expect(cheatCourses[0].title).toBe('css');
    expect(cheatCourses[1].title).toBe('React')
})