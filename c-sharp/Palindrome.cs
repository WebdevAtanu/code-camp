using System;

namespace practice_set
{
    internal static class Palindrome
    {
        public static bool IsPalindrome(string text)
        {
            if (string.IsNullOrEmpty(text)) return false;

            int left = 0;
            int right = text.Length - 1;

            while (left < right)
            {
                // skip non-alphanumeric
                while (left < right && !char.IsLetterOrDigit(text[left])) left++;
                while (left < right && !char.IsLetterOrDigit(text[right])) right--;

                // compare characters (ignore case)
                if (char.ToLower(text[left]) != char.ToLower(text[right]))
                    return false;

                left++;
                right--;
            }

            return true;
        }

        public static void Run()
        {
            Console.Write("Enter text: ");
            var input = Console.ReadLine();

            Console.WriteLine(IsPalindrome(input)
                ? "Palindrome"
                : "Not a palindrome");
        }
    }
}