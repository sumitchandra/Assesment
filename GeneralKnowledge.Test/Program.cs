using GeneralKnowledge.Test.App.Tests;
using System;

namespace GeneralKnowledge.Test.App
{
    class Program
    {
        static void Main(string[] args)
        {
            // String manipulations
            var t1 = new StringTests();
            t1.Run();

            // Data retrieval from a JSON file
            var t2 = new JsonReadingTest();
            t2.Run();

            // Image manipulations
            var t3 = new RescaleImageTest();
            t3.Run();

            // Processing a CSV file
            var t4 = new CsvProcessingTest();
            t4.Run();

            Console.WriteLine("Test execution ended.");
            Console.ReadKey();
        }
    }
}
